import { PhotosData } from "../../components/PhotoData";
import "../components/PhotosStyles.css";

function PhotoGallery() {
  return (
    <>
      <div className="photoGallery">
        <h1 className="text-center text-4xl font-bold py-20">Photo Gallery</h1>
        <ul>
          {PhotosData.map((item) => {
            return (
              <li key={item.id} className="item">
                <img src={item.imageSrc} alt={item.description} />
                <h3> {item.description} </h3>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default PhotoGallery;
