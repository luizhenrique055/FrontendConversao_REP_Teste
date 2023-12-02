import { Button } from "_components/atoms/Button";
import { Stack, Center, Text, HStack, Box, VStack, FlatList, Heading, View, ScrollView} from "native-base";
import { number } from "yup";

// interface ItemSchema {
//     valorBase: number;
//     cotacao: number;
//     valorConvertido: number;
//     data: string;
// }

export function Historic() {

    let data;

    function hadleExibirHistorico() {

        data = fetch('https://c491-45-228-205-88.ngrok-free.app/convertion/dolar/historico')
            .then((response) => response.json())
            .then((json) => console.log(json));
    }


    return (
        <Stack direction={"column"} flex={1} bg={"gray.600"} safeArea>
            <Button title="VALdaldaslda" onPress={console.log(data)}></Button>
        </Stack>
    )
}