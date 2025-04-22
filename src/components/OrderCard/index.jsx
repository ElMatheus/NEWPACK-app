import { View, Text, TouchableOpacity, DevSettings } from 'react-native';
import { useState } from 'react';
import styles from './styles';

const OrderCard = ({ order }) => {
  const [expanded, setExpanded] = useState(false);

  const total = order.Order_details.reduce((sum, product) => sum + product.full_price, 0);

  const formatCurrency = (value) => {
    return value.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.orderDate}>
        {new Date(order.order_date).toLocaleString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })}
      </Text>

      <View style={styles.orderCard}>
        <TouchableOpacity onPress={() => setExpanded(!expanded)}>
          <View style={styles.orderHeader}>
            <View>
              <Text style={styles.orderTitle}>Pedido N°{order.order_number}</Text>
              <Text style={styles.orderTxtId}>#{order.id}</Text>
            </View>
            <View style={styles.orderStatus}>
              {
                order.status === 'Concluído' ? (
                  <Text style={styles.statusTextGreen}>Concluído</Text>
                ) : order.status === 'Inválido' ? (
                  <Text style={styles.statusTextRed}>Inválido</Text>
                ) : (
                  <Text style={styles.statusText}>{order.status}</Text>
                )
              }
              <Text style={styles.orderTotal}>R$ {formatCurrency(total)}</Text>
            </View>
          </View>

          {expanded && (
            <View style={styles.productsList}>
              <Text style={styles.orderTitle}>Produtos do pedido:</Text>
              {order.Order_details.map((product) => (
                <View key={product.id} style={styles.productItem}>
                  <Text style={styles.productTextItem}>ID: {product.product_id}</Text>
                  <Text style={styles.productTextItem}>Qtd: {product.quantity}</Text>
                  <Text style={styles.productTextItem}>R$ {formatCurrency(product.full_price)}</Text>
                </View>
              ))}
              <View style={styles.containerDetails}>
                <Text style={styles.orderTitle}>Detalhes do pedido:</Text>
                <Text style={styles.productTextItem}>Descrição: {order.description}</Text>
                <Text style={styles.productTextItem}>Valor Total: {order.installment}x de R$ {formatCurrency(total / order.installment)}</Text>
              </View>
              <View style={styles.containerDetails}>
                <Text style={styles.orderTitle}>Endereço do pedido:</Text>
                <Text style={styles.productTextItem}>Rua: {order.client.Address[0].street}</Text>
                <Text style={styles.productTextItem}>Número: {order.client.Address[0].number}</Text>
                <Text style={styles.productTextItem}>Bairro: {order.client.Address[0].neighborhood}</Text>
                <Text style={styles.productTextItem}>Complemento: {order.client.Address[0].complement}</Text>
                <Text style={styles.productTextItem}>Cidade: {order.client.Address[0].city}</Text>
                <Text style={styles.productTextItem}>Estado: {order.client.Address[0].state}</Text>
                <Text style={styles.productTextItem}>CEP: {order.client.Address[0].cep}</Text>
                <Text style={styles.productTextItem}>Frete: {order.client.Address[0].freight}</Text>
              </View>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default OrderCard;