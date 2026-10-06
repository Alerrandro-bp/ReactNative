import { View, Text } from "react-native";

interface Pessoa {
    nome: string
    idade: number
}

export default function Nome(pessoa: Pessoa) {
    return (
        <View>
           <Text>{pessoa.nome}</Text>
           <Text>{pessoa.idade}</Text>
        </View>
    );
}