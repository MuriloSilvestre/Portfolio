import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
 } from "typeorm";
import Person from "@modules/person/typeorm/entities/Person";

@Entity('address')
class Address{

  @PrimaryGeneratedColumn('increment')
  public Id: number

  @Column()
  public Cep: string

  @Column()
  public Logradouro: string

  @Column()
  public Complemento: string

  @Column()
  public Bairro: string

  @Column()
  public Localidade: string

  @Column()
  public Uf: string

  @Column()
  public Pais: string

  @Column()
  public Number: number

  @CreateDateColumn()
  public CreatedAT: Timestamp

  @UpdateDateColumn()
  public UpdateAT: Timestamp

  @OneToOne(()=>Person, Person => Person.AddressId)
  Person: Person
}
export default Address
