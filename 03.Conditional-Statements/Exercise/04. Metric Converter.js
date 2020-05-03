function metricConverter(num, input_metric, output_metric){
    let result = num
    if (input_metric == "mm"){
        switch(output_metric){
            case "m":
                result = result / 1000;
                break;
            case  "cm":
                result = result / 10;
                break;
        }
    } else if (input_metric == "m") {
        switch(output_metric){
            case "mm":
                result = result * 1000;
                break;
            case  "cm":
                result = result * 100;
                break;
        }
    } else {
        switch(output_metric){
            case "mm":
                result = result * 10;
                break;
            case  "m":
                result = result / 100;
                break;
        }
    }
    console.log(result.toFixed(3))
}