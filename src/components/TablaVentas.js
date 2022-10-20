import React, {Component} from "react";

class TablaVentas extends Component {
    render() { 
        return ( 
            <table class="table table-hover">
                <thead>
                    <tr  class="table-active table-dark">
                    <th scope="col">Id_venta</th>
                    <th scope="col">Fecha_venta</th>
                    <th scope="col">Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="ttable-secondary">
                    <th scope="row">RC-001</th>
                    <td>11/10/2022</td>
                    <td>$ 25.000</td>
                    </tr>
                    <tr class="table-secondary">
                    <th scope="row">RC-002</th>   
                    <th scope="row">11/10/2022</th>
                    <td>$ 7.900</td>              
                    </tr>
                    <tr class="table-secondary">
                    <th scope="row">RC-003</th>
                    <td>12/10/2022</td>
                    <td>$ 13.750</td>
                    </tr>
                    <tr class="table-secondary">
                    <th scope="row">RC-004</th>
                    <td>12/10/2022</td>
                    <td>$ 3.600</td>
                    </tr>
                    <tr class="table-secondary">
                    <th scope="row">RC-005</th>
                    <td>12/10/2022</td>
                    <td>$ 8.100</td>
                    </tr>
                    <tr class="table-secondary">
                    <th scope="row">RC-006</th>
                    <td>12/10/2022</td>
                    <td>$ 75.400</td>
                    </tr>
                    <tr class="table-secondary">
                    <th scope="row">RC-007</th>
                    <td>12/10/2022</td>
                    <td>$ 32.000</td>
                    </tr>
                    <tr class="table-secondary">
                    <th scope="row">RC-008</th>
                    <td>12/10/2022</td>
                    <td>$ 36.950</td>
                    </tr>
                    <tr class="table-secondary">
                    <th scope="row">RC-009</th>
                    <td>12/10/2022</td>
                    <td>$ 125.000</td>
                    </tr>
                    <tr class="table-dark">
                    <th scope="row">Total</th>
                    <td></td>
                    <td>$ 302.700</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default TablaVentas;

