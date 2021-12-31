import {
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
 } from "typeorm";
import Partner from "@modules/partner/typeorm/entities/Partner";

@Entity('address')
class Address{

  @PrimaryGeneratedColumn('increment')
  public Id: number

  @Column()
  public cep: string

  @Column()
  public logradouro: string

  @Column()
  public complemento: string

  @Column()
  public bairro: string

  @Column()
  public localidade: string

  @Column()
  public uf: string

  @Column()
  public pais: string

  @OneToOne(()=>Partner, Partner => Partner.AddressId)
  Partner: Partner
}
export default Address
