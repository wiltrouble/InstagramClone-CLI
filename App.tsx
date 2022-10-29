import { StyleSheet, Text, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

import colors from './src/theme/colors'
import {size} from './src/theme/fonts'

const App = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: colors.primary, fontSize: size.lg}}>App</Text>
      <AntDesign name='home' size={25} />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})