import { useTranslation } from "react-i18next";
import { majorColorClassMap, majorList } from "../../constants/stylesMap";
import styles from "./FilterBox.module.css";

function FilterBox() {
  const { t } = useTranslation();

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterBox}>
        {majorList.map((major, index) => {
          return (
            <div key={index} className={styles.optionLabel}>
              <input
                className={styles.checkboxWrapper}
                type="checkbox"
                value={t(`filter.${major}`)}
              />
              <div
                key={index}
                className={styles.labelContainer}
                style={{
                  backgroundColor: `${majorColorClassMap[`${major}`].background}`,
                  color: `${majorColorClassMap[`${major}`].color}`,
                }}
              >
                <label>{t(`filter.${major}`)}</label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FilterBox;
