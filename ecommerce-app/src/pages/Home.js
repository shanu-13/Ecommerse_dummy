

import ProductCarousel from "../components/ProductCarousel";
import BrandingSection from "../components/BrandingSection";
import PremiumFooter from "../components/PremiumFooter";
import Collection from "../components/Collection";
import Gridpage from "../components/Gridpage";
import CustomerReview from "../components/CustomerReview";
function Home() {
  
    
  
  return (
    <>
      
      <ProductCarousel />
      <BrandingSection />
     
    
      <Gridpage />
      <Collection />
     <CustomerReview />
     

      <PremiumFooter />
    </>
  );

}
export default Home;