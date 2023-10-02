import "./Lucoum.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import LucoumCard from "@/components/Lucoum/LucoumCard/LucoumCard";
import LucoumImage1 from "@/assets/images/Lucoum/Lucoum.png";
import LucoumCardBottom from "@/components/Lucoum/LucoumCardBottom/LucoumCardBottom";

function Lucoum() {
  return (
    <div className="Lucoum">
      <Navbar />
      <LucoumCard
        backgroundColor="#007bff" // Change background color to white
        imageUrl={LucoumImage1}
        title="Lucas alias Lucoum"
        content="Tout le monde me connaît sous le pseudonyme de Lucoum mais je m'appelle Lucas, enchanté et bienvenu."
        textColor="white"
      />
      <LucoumCard
        backgroundColor="#ffffff" // Change background color to white
        imageUrl={LucoumImage1}
        title="Mes Études"
        content="Je suis diplômé d'un DEUST métier de la forme. Ce diplôme se déroule sur 2 ans pour un total de 600 heures de stage dans une salle de sport. Pendant ces 2 ans, j'ai acquis beaucoup de connaissances sur le terrain. J'estime être capable de donner les meilleurs conseils dans la musculation, plus principalement dans la prise de muscle."
        textColor="black"
        reverseLayout={true}
      />

      <LucoumCardBottom />
      <Footer />
    </div>
  );
}
export default Lucoum;
