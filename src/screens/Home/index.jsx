import { View, TouchableOpacity, Text, ActivityIndicator } from 'react-native';

import Title from '../../components/Title';

import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import PopUp from '../../components/PopUp';
import PopUp2 from '../../components/PopUp2';
import styles from './styles';

export default function Home() {
  const { user, signOut, getUsers, globalLoading } = useContext(AuthContext);
  const [users, setUsers] = useState([{}]);
  const [popUp, setPopUp] = useState(null);
  const [popUp2, setPopUp2] = useState(null);

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const response = await getUsers();
        setUsers(response);
      } catch (error) {
        if (error.response) {
          setPopUp2(error.response.data.message);
        } else {
          setPopUp('Erro interno do servidor');
          setTimeout(() => {
            setPopUp(null);
          }, 3000);
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
          {popUp && <PopUp message={popUp} />}
          {popUp2 && <PopUp2 user={name} message={popUp2} exitPopUp={setPopUp2} />}
        </>
      )}
    </View>
  )
}