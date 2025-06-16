import { View, Text, TouchableOpacity, ScrollView, Linking } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import { AntDesign, FontAwesome, MaterialIcons, Feather, SimpleLineIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { version } from '../../../package.json';

// FAQ Card Component
const CardQuestion = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => setExpanded(!expanded)}
      activeOpacity={0.7}
    >
      <View style={styles.cardHeader}>
        <Text style={styles.cardQuestion}>{question}</Text>
        <AntDesign name={expanded ? "minus" : "plus"} size={20} color="#4B6584" />
      </View>

      {expanded && (
        <View style={styles.cardBody}>
          <Text style={styles.cardAnswer}>{answer}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

// Contact Card Component
const ContactCard = ({ icon, title, subtitle, onPress, color }) => {
  return (
    <TouchableOpacity style={styles.contactCard} onPress={onPress} activeOpacity={0.7}>
      <View style={[styles.contactIconContainer, { backgroundColor: color }]}>
        {icon}
      </View>
      <View style={styles.contactInfo}>
        <Text style={styles.contactTitle}>{title}</Text>
        <Text style={styles.contactSubtitle}>{subtitle}</Text>
      </View>
      <AntDesign name="right" size={18} color="#999" />
    </TouchableOpacity>
  );
};

export default function HelpPage() {
  const navigation = useNavigation();
  const statusBarHeight = Constants.statusBarHeight;
  const faqs = [
    {
      question: "Erro interno do servidor",
      answer: "Esse erro geralmente indica que há um problema com o servidor do aplicativo. Isso pode ocorrer devido a uma manutenção programada, problemas técnicos ou sobrecarga do servidor. Recomendamos que você aguarde alguns minutos e tente novamente. Se o problema persistir, entre em contato com a gente."
    },
    {
      question: "Erro inesperado",
      answer: "Esse erro pode ocorrer devido a uma falha temporária no aplicativo ou no servidor. Tente fechar o aplicativo e abri-lo novamente. Se o erro continuar entre em contato conosco."
    },
    {
      question: "Falha no login",
      answer: "Se você estiver com dificuldades para fazer login, verifique se suas credenciais estão corretas. Certifique- se de que não há espaços extras no final do nome de usuário. Caso não se lembre dos dados de acesso, entre em contato conosco."
    },
    {
      question: "Valor do produto não confere com o valor do pedido",
      answer: "Isso pode acontecer devido a um erro de atualização de preços no aplicativo. Verifique se o valor do produto está correto na página do produto e compare com o valor total do seu pedido. Recomendamos que tire o produto do carrinho e adicione novamente para garantir que o preço esteja atualizado. Se o problema persistir, entre em contato com nossa equipe."
    },
    {
      question: "Como faço um pedido?",
      answer: "Para fazer um pedido, navegue até a seção de produtos, escolha os itens desejados, adicione-os ao carrinho e finalize a compra."
    },
    {
      question: "Como sei que o pedido foi efetuado?",
      answer: "Após concluir a compra com sucesso, você receberá um e-mail de confirmação. Em seguida, nossa equipe iniciará o processo de preparo e envio do seu pedido. Se quiser ter certeza de que a compra foi registrada, você também pode acessar a seção Meus Pedidos no aplicativo para verificar as informações do seu pedido."
    },
    {
      question: "Atualização do aplicativo",
      answer: `Recomendamos que voce use a versão 1.4.1 ou superior do aplicativo para garantir a melhor experiência. Se você estiver usando uma versão anterior, entre em contato conosco para obter assistência na atualização. Sua versão: ${version}`
    },
    {
      question: "Comprovante de pedido",
      answer: `Para sua segurança, recomendamos que envie o comprovante do pedido pelo WhatsApp. Mas, caso não tenha enviado, não se preocupe! Se você finalizou a compra e recebeu o comprovante por e-mail, isso significa que seu pedido já foi registrado corretamente no nosso sistema.`
    },
  ];
  const handleWhatsApp = () => {
    Linking.openURL('https://wa.me/5519996991843?text=Olá,%20preciso%20de%20ajuda%20com%20meu%20pedido');
  };

  const handleEmail = () => {
    Linking.openURL('mailto:solucoesnewpack@gmail.com?subject=Suporte%20ao%20Cliente%20-%20App');
  };

  return (
    <View style={styles.container}>
      <View style={[styles.header, { paddingTop: statusBarHeight }]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={29} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Central de Ajuda</Text>
      </View>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <SimpleLineIcons name="question" size={42} color="#4B6584" style={styles.sectionIcon} />
          <Text style={styles.sectionTitle}>
            Está enfrentando algum problema?
          </Text>
          <Text style={styles.sectionText}>
            Se algum produto não está cadastrado corretamente, as informações estão incorretas,
            o app não está funcionando como deveria ou você não está conseguindo fazer um pedido,
            fale com a gente! Estamos prontos para te ajudar o mais rápido possível.
          </Text>
        </View>

        <View style={styles.contactSection}>

          <ContactCard
            icon={<FontAwesome name="whatsapp" size={22} color="#fff" />}
            title="WhatsApp"
            subtitle="+55 19 99699-1843"
            color="#25D366"
            onPress={handleWhatsApp}
          />

          <ContactCard
            icon={<MaterialIcons name="email" size={22} color="#fff" />}
            title="E-mail"
            subtitle="solucoesnewpack@gmail.com"
            color="#4285F4"
            onPress={handleEmail}
          />
        </View>

        <View style={styles.faqSection}>
          <Text style={styles.faqTitle}>Pode ser útil</Text>

          {faqs.map((faq, index) => (
            <CardQuestion
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}