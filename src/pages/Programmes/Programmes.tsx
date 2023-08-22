import Navbar from "../../components/Navbar/Navbar";
import "./Programmes.scss";
import Header from "@/components/Programmes/Header/Header";
import Footer from "@/components/Footer/Footer";
import CardBlueBackground from "@/components/Home/CardBlueBackgroundSection/CardBlueBackgroundSection";
import ProgrammesPerso from "@/assets/images/Programmes/ProgrammesPerso.png";

function Programmes() {
  return (
    <div className="Programmes">
      <Navbar />
      <Header />
      <CardBlueBackground
        description="undefined"
        title="Obtient ta Vidéo Personnalisée"
        buttonText="Obtient ton Programme"
        imageUrl={ProgrammesPerso}
        showSocialLogos={true}
        showDescription={false} // You can change this to false to hide the description
        showNumberedDescriptions={true} // You can change this to false to hide the numbered descriptions
        numberedDescriptions={[
          "Description 1",
          "Description 2",
          "Description 3",
          "Description 4",
          "Description 5",
        ]}
      />
      <Footer />
    </div>
  );
}

export default Programmes;
