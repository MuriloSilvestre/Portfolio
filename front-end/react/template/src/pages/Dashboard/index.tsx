import React from "react";
import ButtomInput from "../../components/ButtomInput";
import ContentHeader from "../../components/ContentHeader";
import ListItems from "../../components/ListItems";
import SelectInput from "../../components/SelectInput";
import { 
    Container,
    Content,
    ListaHeader,
    ItemDisplay,
    ItemDisplayNoScroll,
    Row,
    ItemDisplayVendas
} from "./Style";

const Dashboard: React.FC = () => {
    const Lista = {codigo: 111101, nome:"Subway Vegano 15 cm", data:"10/04/2022", valor: "R$ 3.50" ,quantidade: 24}
    const FiltroProdutos = [
        {
            value: "Avencer",
            label: "A Vencer"
        },
        {
            value: "MaisVendidos",
            label: "Mais Vendidos"
        }
];
    const FiltroGraficos = [
        {
            value: "Dia",
            label: "Dia"
        },
        {
            value: "Semana",
            label: "Semana"
        },
        {
            value: "Mes",
            label: "Mês"
        },
        {
            value: "Ano",
            label: "Ano"
        }
    ];
    return(
        <Container>
            <ContentHeader titulo="Principal">
                <ButtomInput label="Nova Venda" id="Venda" >
                </ButtomInput>
                <ButtomInput label="Nova Compra" id="Compra" >
                </ButtomInput>
            </ContentHeader>
            <Content>
                <Row>
                    <div className="HalfWidth">
                        <ListaHeader>
                            <h2>Produtos</h2>
                            <SelectInput Options = { FiltroProdutos } />
                        </ListaHeader>
                        <ListItems codigo = "Codígo" nome = "Nome" data = "Validade" valor = "Valor" quantidade = "Quantidade"  />
                        <ItemDisplay>
                            <ListItems codigo = {Lista.codigo} nome = {Lista.nome} data = {Lista.data} valor = {Lista.valor} quantidade = {Lista.quantidade} />
                        </ItemDisplay>
                    </div>
                    <div className="HalfWidth">
                        <ListaHeader>
                            <h2>Resultados</h2>
                            <SelectInput Options = { FiltroGraficos } />
                        </ListaHeader>
                        <ItemDisplayNoScroll>
                        </ItemDisplayNoScroll>
                    </div>
                </Row>
                <Row>
                    <div className="FullWidht">
                        <ListaHeader>
                            <h2>Ultimas Vendas</h2>
                            <ButtomInput label="Relatorio" id="Relatorio">
                            </ButtomInput>
                        </ListaHeader>
                        <div className="Valor">
                            <h5> Valor total do dia: R$</h5>
                            <h6 id="TotalVendas">300,00</h6>
                        </div>
                        <ListItems codigo = "Codígo" nome = "Nome" data = "Data" valor = "Valor" quantidade = "N.Itens"/>
                        <ItemDisplayVendas>
                            <ListItems codigo = {Lista.codigo} nome = {Lista.nome} data = {Lista.data} valor = {Lista.valor} quantidade = {Lista.quantidade} />
                            <ListItems codigo = {Lista.codigo} nome = {Lista.nome} data = {Lista.data} valor = {Lista.valor} quantidade = {Lista.quantidade} />
                            <ListItems codigo = {Lista.codigo} nome = {Lista.nome} data = {Lista.data} valor = {Lista.valor} quantidade = {Lista.quantidade} />
                            <ListItems codigo = {Lista.codigo} nome = {Lista.nome} data = {Lista.data} valor = {Lista.valor} quantidade = {Lista.quantidade} />
                            <ListItems codigo = {Lista.codigo} nome = {Lista.nome} data = {Lista.data} valor = {Lista.valor} quantidade = {Lista.quantidade} />
                            <ListItems codigo = {Lista.codigo} nome = {Lista.nome} data = {Lista.data} valor = {Lista.valor} quantidade = {Lista.quantidade} />
                            <ListItems codigo = {Lista.codigo} nome = {Lista.nome} data = {Lista.data} valor = {Lista.valor} quantidade = {Lista.quantidade} />
                            <ListItems codigo = {Lista.codigo} nome = {Lista.nome} data = {Lista.data} valor = {Lista.valor} quantidade = {Lista.quantidade} />
                            <ListItems codigo = {Lista.codigo} nome = {Lista.nome} data = {Lista.data} valor = {Lista.valor} quantidade = {Lista.quantidade} />
                        </ItemDisplayVendas>
                    </div>
                </Row>
            </Content>
        </Container>
    )
}

export default Dashboard;
