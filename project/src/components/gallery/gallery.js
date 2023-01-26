import styles from "./gallery.module.css";
import { BiExpand } from "react-icons/bi";
import Modal from "../modal";
import { useState } from "react";
import galleryFilters from "../../data/galleryFilters_image_data";

function Gallery() {
  const [items, setItems] = useState(galleryFilters);
  const filterItem = (categItem) => {
    const updatedItems = galleryFilters.filter((galElem) => {
      return galElem.category === categItem;
    });
    setItems(updatedItems);
  };
  const [show, setShow] = useState(false);

  return (
    <section className={styles.container}>
      <section className={styles.filterHolder}>
        <div className={styles.filters}>
          <a
            href="#"
            onClick={() => setItems(galleryFilters)}
            className={styles.selected}
          >
            All
          </a>
        </div>

        <div className={styles.filters}>
          <a
            href="#"
            onClick={() => filterItem("ankara styles")}
            className={styles.a}
          >
            Ankara
          </a>
        </div>

        <div className={styles.filters}>
          <a
            href="#"
            onClick={() => filterItem("trousers")}
            className={styles.a}
          >
            Trousers
          </a>
        </div>

        <div className={styles.filters}>
          <a href="#" onClick={() => filterItem("skirts")} className={styles.a}>
            Skirts
          </a>
        </div>

        <div className={styles.filters}>
          <a href="#" onClick={() => filterItem("gowns")} className={styles.a}>
            Gowns
          </a>
        </div>

        <div className={styles.filters}>
          <a href="#" onClick={() => filterItem("laces")} className={styles.a}>
            Laces
          </a>
        </div>

        <div className={styles.filters}>
          <a href="#" onClick={() => filterItem("shoes")} className={styles.a}>
            Shoes
          </a>
        </div>

        <div className={styles.filters}>
          <a
            href="#"
            onClick={() => filterItem("senators")}
            className={styles.a}
          >
            Senators
          </a>
        </div>
      </section>

      <div className={styles.imageGalleryHolder}>
        {items.map((elem) => {
          const { id, image } = elem;

          return (
            <ul className={styles.imageGallery}>
              <li>
                <img src={image} alt="" />
                <div className={styles.overlay}>
                  <span>Image title</span>
                  <button onClick={() => setShow(true)} className={styles.btn}>
                    <i className={styles.i}>
                      <BiExpand />
                    </i>
                  </button>
                </div>
              </li>
              <Modal onClose={() => setShow(false)} show={show} />
            </ul>
          );
        })}
      </div>
    </section>
  );
}
export default Gallery;
