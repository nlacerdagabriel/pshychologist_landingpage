import { Flex, FormControl, Stack, Text } from "@chakra-ui/react";
import InputForm from "../InputForm";
import TextArea from "../TextArea";
import CustomButton from "../CustomButton";
import { useForm, Controller } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { rules } from "@/utils/formRules";
import useToastCustom from "@/hooks/useToastCustom";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Form() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const refForm = useRef(null);
  const isInViewForm= useInView(refForm, { once: true, amount: 0.5});

  const [_, newToast] = useToastCustom()


  const sendEmail = (data) => {

    const { name, email, message, subject, phone } = data;

    emailjs
      .send(
        "service_3b8o28v",
        "template_vaguavf",
        {
          name,
          email,
          message,
          subject,
          phone,
        },
        "w5f6bppgJw_vJ6-gc"
      )
      .then(() => {
        newToast({message: "E-mail enviado com sucesso!", status: "success", title: "Obrigada pelo e-mail!"})
        reset();
      })
      .catch(() => {
        newToast({message: "Tente novamente mais tarde.", status: "error", title: "Ops, algo deu errado..."})
      });
  };

  return (
    <form style={{
      transform: isInViewForm ? "none" : "translateX(300px)",
      opacity: isInViewForm ? 1 : 0,
      transition: "300ms",
      flex: "1"
    }}  ref={refForm} onSubmit={handleSubmit(sendEmail)}>
      <Stack spacing="1rem">
        <Stack
          spacing={{ none: "1rem", sm: "0 1rem" }}
          direction={{ none: "column", sm: "row" }}
        >
            <InputForm 
            error={errors.name}
              register={register}
              rules={rules.name}
              name="name"
              placeholder="Nome"
            />
            <InputForm 
            error={errors.email}
              register={register}
              rules={rules.email}
              name="email"
              placeholder="E-mail"
            />
        </Stack>

        <Stack
          spacing={{ none: "1rem", sm: "0 1rem" }}
          direction={{ none: "column", sm: "row" }}
        >
            <InputForm 
            error={errors.phone}
              register={register}
              rules={rules.phone}
              name="phone"
              placeholder="Telefone"
            />
            <InputForm 
            error={errors.subject}
              register={register}
              rules={rules.subject}
              name="subject"
              placeholder="Assunto"
            />
        </Stack>

          <TextArea
            placeholder="Mensagem"
            rules={rules.message}
            name="message"
            register={register}
            error={errors.message}
          />

        <CustomButton type="submit" height={{ none: "5rem", md: "4rem" }}>
          Enviar
        </CustomButton>
      </Stack>
    </form>
  );
}
