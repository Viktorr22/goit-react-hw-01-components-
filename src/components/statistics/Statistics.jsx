import PropTypes from 'prop-types';
import { StatisticTitle, StatisticSection, StatisticsList, StatisticItem, StatisticLabel, StatisticPercentage } from './Statistics.styled';

export function Statistics({ title, stats }) {
  return (
    <StatisticSection>
      {title && <StatisticTitle>{title}</StatisticTitle>}
      <StatisticsList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticItem key={id} itemLabel={label}>
            <StatisticLabel>{label}</StatisticLabel>
         <StatisticPercentage>{percentage}%</StatisticPercentage>     
          </StatisticItem >      
        ))}
      </StatisticsList> 
    </StatisticSection>   
);
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};


