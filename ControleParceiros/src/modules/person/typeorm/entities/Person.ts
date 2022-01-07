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

@Entity('person')
class Person{
  @PrimaryGeneratedColumn('increment')
  public Id: number

  @Column({ nullable: true })
  public Name: string

  @Column({ nullable: true })
  public CorporateName: string

  @Column({ nullable: true })
  public FantasyName: string

  @Column()
  public CnpjCpf: string

  @Column()
  public Telephone: string

  @Column({ nullable: true })
  public NationalRegistry: string

  @Column({ nullable: true })
  public StateRegistry: string

  @Column({ nullable: true })
  public StartTime: string

  @Column({ nullable: true })
  public FinishTime: string

  @Column()
  public TypePerson: string

  @Column()
  public Partner: boolean

  @Column({ nullable: true })
  public Value: number

  @CreateDateColumn()
  public CreatedAT: Timestamp

  @UpdateDateColumn()
  public UpdateAT: Timestamp

  @Column('integer')
  public AddressId: number

  @Column('integer')
  public ServiceId: number

  // @OneToOne(() => Service, Service => Service.Id)
  // @JoinColumn()
  // Service: Service;

  @OneToOne(() => Address, Address => Address.Id)
  @JoinColumn()
  Address: Address;

  @OneToOne(()=>User, User => User.PersonId)
  User: User
}
export default Person
