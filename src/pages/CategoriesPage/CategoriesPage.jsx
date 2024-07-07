import { Link, useParams } from "react-router-dom";
import petGroomingImage from "../../assets/pet_grooming.png";
import petClinicImage from "../../assets/pet_clinic.png";
import petDaycareImage from "../../assets/pet_daycare.png";
import petTrainingImage from "../../assets/pet_training.svg";
import dogPawLogo from "../../assets/logo_svg.svg";

const categoryDetails = {
  "pet-grooming": {
    image: petGroomingImage,
    paragraph: `
      Pet grooming is the process of maintaining your pet’s hygiene and enhancing their physical appearance,
      which includes tasks like washing, brushing, trimming fur, and clipping nails.
    `,
  },
  "pet-clinic": {
    image: petClinicImage,
    paragraph: `
      The pet clinic offers comprehensive veterinary services, including medical consultations,
      vaccinations, and surgical procedures, ensuring the well-being of furry companions.
      The clinic provides compassionate care and support to pets and their owners.
    `,
  },
  "pet-daycare": {
    image: petDaycareImage,
    paragraph: `
      Pet daycare offers a safe and stimulating environment for pets while their owners are away,
      providing companionship, exercise, and socialization opportunities. Supervised by trained staff, pets engage
    `,
  },
  "pet-training": {
    image: petTrainingImage,
    paragraph: `
      Pet training encompasses teaching animals essential behaviors and commands, fostering obedience and good manners.
      Training sessions focus on positive reinforcement techniques, such as rewards and praise.
    `,
  },
};

const CategoriesPage = () => {
  const { categoryName = "pet-grooming" } = useParams();
  console.log({ categoryName }, "from useParam");
  const { image, paragraph } = categoryDetails[categoryName] || {
    image: null,
    paragraph: "Category not found.",
  };

  return (
    <div className="flex flex-col md:flex-row h-screen pt-16 md:pt-0">
      {/* Left Side */}
      <div className="w-full md:w-1/2 p-10 flex flex-col text-start gap-2">
        <h1 className="text-6xl font-bold">Categories</h1>

        <h2 className="text-4xl mt-8 capitalize">
          {categoryName.replace(/-/g, " ")}
        </h2>
        <p className="mt-4 text-xl">{paragraph}</p>

        <button className="bg-complementary-secondary text-white px-4 py-2 rounded w-[25%]">
          Get Started
        </button>

        <div className="mt-12">
          <nav className="flex gap-4 flex-wrap">
            {Object.keys(categoryDetails).map((category) => (
              <Link
                key={category}
                to={`/categories/${category}`}
                className={`px-4 flex justify-center items-center whitespace-nowrap ${
                  categoryName === category
                    ? "border-blue-500 text-blue-500 bg-complementary-primary"
                    : "border-transparent text-gray-600 hover:text-blue-500"
                }`}
              >
                <img src={dogPawLogo} alt="Logo" className="h-5 mr-2" />
                {category.replace(/-/g, " ")}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      {/* Right Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center mt-10 md:mt-0">
        <div
          className="w-full h-full max-w-lg md:w-[682.53px] md:h-[682.53px] bg-gray-100 flex items-center justify-center p-4"
          style={{
            borderRadius: "61px 0px 0px 0px",
          }}
        >
          {image && (
            <img
              src={image}
              alt={categoryName}
              className="rounded-full object-cover w-full h-full md:w-[80%] md:h-[80%]"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
