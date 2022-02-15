import { LightningElement } from "lwc";

export default class App extends LightningElement {
  /**
   * Object para armazenar os dados:
   * onde a key será o name dos inputs do componente
   * 
   * 
   */
    account = {
      name: "",
      phone: "",
      website: ""
    };

   

    /**
     * a função será handleInputChange
     * 
     * será uma função para armazenar os valores dos campos 
     * dentro do objeto, baseado no name do campo e seu value
     */

    handleInputChange(event){
        console.log(this.account);
        //recebendo o valor do campo
        //console.log("Value: " + event.target.value);

        //recebendo o valor do name
        //console.log("Name: " + event.target.name);

        /**
         * guardando em duas variáveis temporarias 
         * valores de name e value do campo 
         * do evento acionado
         */
        let name_ = event.target.name;
        let value_ = event.target.value;
        
        /**
         * montando um objeto 
         * onde o name_ será a chave do objeto
         * e o value_ será o valor para aquela chave
         * 
         * spread -> ...
         * 
         * 
         */
        this.account = {
          ...this.account, 
          [name_]:value_
        }

        /**
         * {
         *    name:valor
         * }
         */

        console.log(this.account);
    }



}
