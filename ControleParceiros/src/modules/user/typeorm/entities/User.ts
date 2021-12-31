import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn
 } from "typeorm";
 import Partner from "@modules/partner/typeorm/entities/Partner";


@Entity('user')
class User{
  @PrimaryGeneratedColumn('increment')
  public Id: number

  @Column()
  public UserName: string

  @Column()
  public Email: string

  @Column()
  public Password: string

  @Column()
  public Token: string

  @CreateDateColumn()
  public CreatedAT: Timestamp

  @UpdateDateColumn()
  public UpdateAT: Timestamp

  @Column('integer')
  public PartnerId: number

  @OneToOne(() => Partner, Partner => Partner.Id)
  @JoinColumn()
  Partner: Partner;
}

export default User
