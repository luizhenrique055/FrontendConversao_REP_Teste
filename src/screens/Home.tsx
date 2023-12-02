import { Stack, Center, Text } from "native-base";
import conversaoRealDolarService from "_services/conversaoRealDolarService";

import { useNavigation } from "@react-navigation/native";
import { Button } from "_components/atoms/Button";
import { Input } from "_components/atoms/Input";
import { set, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import axios from "axios";

export function Home() {

  const [valorConvertido, setValorConvertido] = useState(0);

  // type FormDataProps = {
  //   labelValue: number;
  // };

  // const ConversaoSchema = yup.object({
  //   labelValue: yup.number().required("Informe um valor valido para conversão."),
  // });

  const navigation = useNavigation();

  // function handleInserirBanco(){
  //     //usar o use state
  // }

  function handleMoveToHistoric() {
    navigation.navigate("historic");
  }

  function handleConverterValor() {
    fetch('https://c491-45-228-205-88.ngrok-free.app/convertion/dolar', {
      method: 'POST',
      body: '5'
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
  // function Converter() {
  //   const {
  //     control,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm<FormDataProps>({
  //     resolver: yupResolver(ConversaoSchema),
  //   });

  return (
    <Stack direction={"column"} flex={1} bg={"gray.600"} safeArea>
      <Center flex={1}>
        <Input errorMessage={"Insira um valor valido"} isInvalid={false} variant={"outline"}></Input>
        <Button title={"Converter"} onPress={handleConverterValor}></Button>
        <Text color={"white"} fontSize={"3xl"}>
          Valor da conversão: {valorConvertido}
        </Text>
        <Button title={"Historico De Conversões"} onPress={handleMoveToHistoric}></Button>
      </Center>
    </Stack>
  );
}
