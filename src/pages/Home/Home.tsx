import Navbar from "../../components/Navbar/Navbar";
import ReactPlayer from "react-player";
import "./Home.scss";
import ProgrammesSection from "@/components/ProgrammesSection/ProgrammesSection";
import ProgrammesImage from "@/assets/images/Home/ProgrammesExercices.png";
import CardBlueBackground from "@/components/CardBlueBackgroundSection/CardBlueBackgroundSection";
import Header from "@/components/Header/Header";
import ReviewSection from "@/components/ReviewSection/ReviewSection";
import Footer from "@/components/Footer/Footer";

function Home() {
  const videoUrl = "https://www.youtube.com/watch?v=tZ8O5ONqLdA";

  return (
    <div className="Home">
      <Navbar />

      <div className="Home_Container">
        <Header />

        <div className="Video">
          <ReactPlayer
            url={videoUrl}
            width={"1000px"}
            height={"500px"}
            controls={true}
          />
        </div>

        <ProgrammesSection
          title="Programmes et Exercices Personnalisés"
          description1="Des conseils avisés et professionnels"
          description2="Des résultats et un objectif atteint"
          buttonText="Obtient ton Programme"
          imageUrl={ProgrammesImage}
        />

        <CardBlueBackground
          title="Qui est LUCOUM ?"
          description="Je m'appelle Lucas enchanté et bienvenue. Je suis diplômé d'un DEUST métier de la forme et je suis passionné de musculation depuis maintenant 6 ans."
          buttonText="En savoir plus sur moi"
          imageUrl={ProgrammesImage}
          showSocialLogos={true}
        />

        <ReviewSection />

        <Footer />
      </div>
    </div>
  );
}

export default Home;
