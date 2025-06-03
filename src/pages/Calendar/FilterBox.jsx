import { useTranslation } from "react-i18next";
import { majorColorClassMap, majorList } from "../../constants/stylesMap";
import styles from "./FilterBox.module.css";

function FilterBox({ selectedMajors, setSelectedMajors }) {
  const { t } = useTranslation();

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterBox}>
        {/* display major filters */}
        {majorList.map((major, index) => {
          const checkboxId = `major-checkbox-${index}`;
          return (
            <div key={index} className={styles.optionLabel}>
              <input
                id={checkboxId}
                className={styles.checkboxWrapper}
                type="checkbox"
                value={t(`filter.${major}`)}
                checked={selectedMajors.includes(major)}
                /* select + deselect filter */
                onChange={() => {
                  if (selectedMajors.includes(major)) {
                    setSelectedMajors(
                      selectedMajors.filter(
                        (majorToDeselect) => majorToDeselect !== major
                      )
                    );
                  } else {
                    setSelectedMajors([...selectedMajors, major]);
                  }
                }}
              />
              <label
                key={index}
                htmlFor={checkboxId}
                className={styles.labelContainer}
                style={{
                  backgroundColor: `${majorColorClassMap[`${major}`].background}`,
                  color: `${majorColorClassMap[`${major}`].color}`,
                }}
              >
                {t(`filter.${major}`)}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FilterBox;
