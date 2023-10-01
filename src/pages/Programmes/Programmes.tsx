import Navbar from "../../components/Navbar/Navbar";
import "./Programmes.scss";
import Header from "@/components/Programmes/Header/Header";
import Footer from "@/components/Footer/Footer";
import CardBlueBackground from "@/components/Home/CardBlueBackgroundSection/CardBlueBackgroundSection";
import ProgrammesPerso from "@/assets/images/Programmes/ProgrammesPerso.png";
import Warning from "@/components/Programmes/Warning/Warning";

function Programmes() {
  return (
    <div className="Programme">
      <Navbar />
      <Header />
      <CardBlueBackground
        description="undefined"
        title="Obtient ta Vidéo Personnalisée"
        buttonText="Obtient ton Programme"
        imageUrl={ProgrammesPerso}
        showSocialLogos={false}
        showDescription={false} // You can change this to false to hide the description
        showNumberedDescriptions={true} // You can change this to false to hide the numbered descriptions
        numberedDescriptions={[
          "Sur Youtube en non répertorié",
          "Toutes les Informations dont tu as besoin",
          "Ton Programme Final par Mail",
          "Un Suivi pour toutes tes questions",
          "Date précise du programme corrigé",
        ]}
      />
      <Warning />
      <Footer />
    </div>
  );
}

export default Programmes;
