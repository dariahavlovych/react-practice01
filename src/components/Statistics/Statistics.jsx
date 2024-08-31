import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  const iconsArray = [
    <FaRegThumbsUp key="1" />,
    <MdPeople key="2" />,
    <MdOutlineProductionQuantityLimits key="3" />,
    <GiTreeDoor key="4" />,
  ];
  return (
    <>
      {title && <h2 className={style.title}>{title}</h2>}
      <ul className={style.list}>
        {stats.map((stat, index) => (
          <StatisticsItem
            key={stat.id}
            title={stat.title}
            total={stat.total}
            icon={iconsArray[index]}
          />
        ))}
      </ul>
    </>
  );
};
