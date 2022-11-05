import styles from "./row.module.scss";
import classnames from "classnames";
import Folder from "@material-ui/icons/Folder";
import DescriptionIcon from "@material-ui/icons/Description";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import { useState } from "react";

export default function Row({ item, level, children }: RowProps) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const entityIcon = item.hasChildren ? (
    isCollapsed ? (
      <Folder className={styles.folder} />
    ) : (
      <FolderOpenIcon className={styles.folderOpen} />
    )
  ) : (
    <DescriptionIcon className={styles.file} />
  );
  return (
    <div key={`section-${item.id}`}>
      <div
        className={classnames(styles.row, styles[`level-${level}`])}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {!item.hasChildren ? null : (
          <ChevronRightIcon
            className={classnames(styles.chevron, {
              [styles.rotated]: !isCollapsed,
            })}
          />
        )}
        {entityIcon}
        <span className={styles.text}>{item.text}</span>
      </div>
      <div
        className={classnames(styles.children, {
          [styles.collapsed]: isCollapsed,
        })}
      >
        {children}
      </div>
    </div>
  );
}
