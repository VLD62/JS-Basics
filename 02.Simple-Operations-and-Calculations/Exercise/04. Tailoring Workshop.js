function tailoringWorkshop(table_count, table_length, table_width){
    table_count = table_count - 0;
    table_length = table_length - 0;
    table_width = table_width - 0;
    let total_covers_area = table_count * (table_length + 0.6) * (table_width + 0.6);
    let total_kare_area = table_count * (table_length / 2) * (table_length / 2);
    let total_price_usd = total_covers_area * 7 + total_kare_area * 9;
    let total_price_bgn = total_price_usd * 1.85;
    console.log(`${total_price_usd.toFixed(2)} USD`);
    console.log(`${total_price_bgn.toFixed(2)} BGN`);
}

tailoringWorkshop(5, 1.00, 0.50)