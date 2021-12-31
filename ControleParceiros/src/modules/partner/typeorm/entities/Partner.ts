import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
 } from "typeorm";
import User from '@modules/user/typeorm/entities/User';
import Address from "@modules/address/typeorm/entities/Address";

@Entity('partner')
class Partner{
  @PrimaryGeneratedColumn('increment')
  public Id: number

  @Column()
  public Name: string

  @CreateDateColumn()
  public CreatedAT: Timestamp

  @UpdateDateColumn()
  public UpdateAT: Timestamp

  @Column('integer')
  public AddressId: number

  @OneToOne(() => Address, Address => Address.Id)
  @JoinColumn()
  Address: Address;

  @OneToOne(()=>User, User => User.PartnerId)
  User: User
}
export default Partner
