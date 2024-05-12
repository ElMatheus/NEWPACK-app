import { View, TouchableOpacity, Text, ActivityIndicator } from 'react-native';

import Title from '../../components/Title';

import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

import styles from './styles';

export default function Home() {
  const { user, signOut, getUsers, globalLoading } = useContext(AuthContext);
  const [users, setUsers] = useState([{}]);


  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const response = await getUsers();
        setUsers(response);
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert('Erro interno do servidor');
        }
      }
    }
    getAllUsers();
  }, []);

  return (
    <View style={styles.container}>
      {globalLoading ? (
        <ActivityIndicator size="large" color="#4B6584" />
      ) : (
        <>
          <Title txt={`Hello! ${user.name} 🤳`} />
          <View>
            <Text style={styles.title}>Usuários:</Text>
            {users.map((user, index) => (
              <Text key={index}>{user.name}</Text>
            ))}
          </View>
        </>
      )}
    </View>
  )
}