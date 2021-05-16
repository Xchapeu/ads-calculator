import React from 'react';

export default function Calculadora(investimento: number, dataIni: string, dataTer: string) {

  const views = investimento * 30;

  function clicks(views: number) {
    return (views / 100) * 12;
  }
  
  function shares(views: number) {
    return (clicks(views) / 20) * 3;
  }
  
  let totViews = views;
  let totClicks = clicks(views);
  let totShares = shares(views);

  const sharedViews = shares(views) * 40;
  const sharedClicks = clicks(sharedViews);
  const sharedShares = shares(sharedViews);

  if(shares(views) >= 1) {
    totViews += sharedViews;
    totClicks += sharedClicks;
    totShares += sharedShares;
    calcSharedViews1(sharedShares);
  } else {
    calcSharedViews1(sharedShares);
  }

  function calcSharedViews1(shareds: number) {
    let sharedViews1 = shareds * 40;
    let sharedClicks1 = clicks(sharedViews1);
    let sharedShares1 = shares(sharedViews1);

    if(sharedShares1 >= 1) {
      totViews += sharedViews1;
      totClicks += sharedClicks1;
      totShares += sharedShares1;
      calcSharedViews2(sharedShares1);
    } else {
      calcSharedViews2(sharedShares1);
    }
  }

  function calcSharedViews2(shareds: number) {
    let sharedViews2 = shareds * 40;
    let sharedClicks2 = clicks(sharedViews2);
    let sharedShares2 = shares(sharedViews2);

    if(sharedShares2 >= 1) {
      totViews += sharedViews2;
      totClicks += sharedClicks2;
      totShares += sharedShares2;
      calcSharedViews3(sharedShares2);
    } else {
      calcSharedViews3(sharedShares2);
    }
  }

  function calcSharedViews3(shareds: number) {
    let sharedViews3 = shareds * 40;
    let sharedClicks3 = clicks(sharedViews3);
    let sharedShares3 = shares(sharedViews3);

    if(sharedShares3 >= 1) {
      totViews += sharedViews3;
      totClicks += sharedClicks3;
      totShares += sharedShares3;
      calcSharedViews4(sharedShares3);
    } else {
      calcSharedViews4(sharedShares3);
    }
  }

  function calcSharedViews4(shareds: number) {
    let sharedViews4 = shareds * 40;
    let sharedClicks4 = clicks(sharedViews4);
    let sharedShares4 = shares(sharedViews4);
    
    totViews += sharedViews4;
    totClicks += sharedClicks4;
    totShares += sharedShares4;
  }

  const data1 = new Date(String(dataIni).split('/').reverse().join(', ')).getDate();
  const data2 = new Date(String(dataTer).split('/').reverse().join(', ')).getDate();

  const diff = Math.abs(data1 - data2);

  const totInvest = diff * investimento;

  return(
    <>
      <h2>Relatório do anúncio</h2>
      <p>{`Valor total investido: ${totInvest}`}</p>
      <p>{`Max. views: ${Math.floor(totViews)}`}</p>
      <p>{`Max. clicks: ${Math.floor(totClicks)}`}</p>
      <p>{`Max. compartilhamentos: ${Math.floor(totShares)}`}</p>
    </>
  );
}