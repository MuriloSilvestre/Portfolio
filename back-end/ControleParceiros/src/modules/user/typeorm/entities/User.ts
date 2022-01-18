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
 import Person from "@modules/person/typeorm/entities/Person";


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

  @Column({ nullable: true })
  public Token: string

  @CreateDateColumn()
  public CreatedAT: Timestamp

  @UpdateDateColumn()
  public UpdateAT: Timestamp

  @Column('integer')
  public PersonId: number

  @OneToOne(() => Person, Person => Person.Id)
  @JoinColumn()
  Person: Person;
}

export default User
