import { Facebook, Instagram, X, YouTube } from "@mui/icons-material";
import { FooterSection } from "./footer-section";

export const Footer = () => {
  return (
    <footer className="bg-primary-foreground flex flex-col gap-8">
      <FooterSection
        title="Contacto"
        items={["vendas@binario.co.mz", "(+258} 84 883 9501 / 87 702 7713"]}
        icons={[
          <Facebook key="1" />,
          <X key="2" />,
          <Instagram key="3" />,
          <YouTube key="4" />,
        ]}
      />
      <FooterSection
        title="Suporte ao cliente"
        items={["Contacte-nos", "Centro de Ajuda", "Sobre Nós"]}
      />
      <FooterSection
        title="Política"
        items={[
          "Envios e Devoluções",
          "Termos e Condições",
          "Métodos de Pagamentos",
          "FAQ",
        ]}
      />
    </footer>
  );
};
