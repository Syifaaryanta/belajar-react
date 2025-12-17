import React from 'react'
import Card from '../Element/CardWrapper'
import BarsDataset from '../Element/BarsDataset';

function CardStatistics(props) {
    const { data } = props;

    return (
        <>
            <Card
                title="Statistics"
                desc={
                    <>
                        <select className="font-bold text-2xl ">
                            <option>Weekly Comparison</option>
                        </select>
                        <BarsDataset dataset={data} />
                    </>
                }
            />
        </>
    );
}

export default CardStatistics;  