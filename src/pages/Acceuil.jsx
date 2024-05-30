import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';

import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent, } from '@syncfusion/ej2-react-dropdowns';

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';

import { earningData, medicalproBranding, recentTransactions, weeklyStats,   SparklineAreaData, ecomPieChartData, stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../data/dummy';
import { AppContext } from '../contexts/contextProvider';
import product9 from '../data/product9.jpg';


const Acceuil = () => {

 
  const { currentColor, currentMode } = AppContext();
  return (
    
    <div className="tout">
    <div className="flex flex-wrap lg:flex-nowrap justify-center ">

<div className="flex m-3 flex-wrap justify-center gap-1 items-center">
{earningData.map((item) => (
<div key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
<button
type="button"
style={{ color: item.iconColor, backgroundColor: item.iconBg }}
className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl">
{item.icon}
</button>
<p className="mt-3">
<span className="text-lg font-semibold">{item.amount}</span>
<span className={`text-sm text-${item.pcColor} ml-2`}>
  {item.percentage}
</span>
</p>
<p className="text-sm text-gray-400  mt-1">{item.title}</p>
</div>
))}
</div>
</div> 

<div className="flex gap-10 m-4 flex-wrap justify-center">
<div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
  <div className="flex justify-between items-center gap-2">
    <p className="text-xl font-semibold">Les coachs</p>
   
  </div>
  <div className="mt-10 w-72 md:w-400">
    {recentTransactions.map((item) => (
      <div key={item.title} className="flex justify-between mt-4">
        <div className="flex gap-4">
          <button
            type="button"
            style={{
              color: item.iconColor,
              backgroundColor: item.iconBg,
            }}
            className="text-2xl rounded-lg p-4 hover:drop-shadow-xl"
          >
            {item.icon}
          </button>
          <div>
            <p className="text-md font-semibold">{item.title}</p>
            <p className="text-sm text-gray-400">{item.desc}</p>
          </div>
        </div>
        <p className={`text-${item.pcColor}`}>{item.amount}</p>
      </div>
    ))}
  </div>
  
</div>

<div className="flex m-6 flex-wrap justify-center gap-2">
    <p className="text-xl font-semibold">Les bénéfices</p>

<ChartComponent
        id="charts"
        primaryXAxis={stackedPrimaryXAxis}
        primaryYAxis={stackedPrimaryYAxis}
        width="500px"
        height="350px"
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        legendSettings={{ background: 'white' }}
      >
        
        <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
        <SeriesCollectionDirective>
          
          {stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
        </SeriesCollectionDirective>
      </ChartComponent>
</div>
</div>
 
    </div>
  )
}
export default Acceuil