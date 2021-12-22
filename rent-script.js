var annual_gross_income = document.getElementById('annual_income');
var rule_type = document.getElementById('rule_type');
var spendable_amount;
var monthly_rent;

function rent_function() {
    
    spendable_amount = annual_gross_income.value * (rule_type.value / 100);
    monthly_rent = spendable_amount / 12;
    document.getElementById('spendable_result').innerHTML = '$'+spendable_amount;
    document.getElementById('monthly_rent_result').innerHTML = '$'+monthly_rent;
}
function alpha_reset() {
    $("input[type=number]").val('');
}
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: [' annual gross income (%)', ' monthly rent (%)', ' spendable amount (%)', ' annual gross income (%)', ' monthly rent (%)', ' spendable amount (%)'],
        datasets: [{
            data: [annual_gross_income.value, monthly_rent, spendable_amount, 60, 20, 20],
            backgroundColor: [
                'rgba(48, 252, 246)',
                'rgba(252, 125, 116)',
                'rgba(20,20,20)',
            ],
            borderWidth: 5,
        }],
    },
    options: {
        plugins: {
            legend: {
                display: false,
            }
        }
    }
});
function updatechart() {
  var total = parseFloat(annual_gross_income.value) + ((parseFloat(annual_gross_income.value) * (parseFloat(rule_type.value) / 100)) / 12) + (parseFloat(annual_gross_income.value) * (parseFloat(rule_type.value) / 100));
  var updatechartvalues = [((parseFloat(annual_gross_income.value) / total) * 100), (((parseFloat(annual_gross_income.value) * (parseFloat(rule_type.value) / 100)) / 12) / total) * 100, ((parseFloat(annual_gross_income.value) * (parseFloat(rule_type.value) / 100)) / total) * 100];
  myChart.data.datasets[0].data = updatechartvalues;
  myChart.update();
}