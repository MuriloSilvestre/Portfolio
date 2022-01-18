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

@Entity('history')
class History{
  @PrimaryGeneratedColumn('increment')
  public Id: number

  @Column()
  public Action: string

  @Column()
  public Type: string

  @CreateDateColumn()
  public CreatedAT: Timestamp

  @UpdateDateColumn()
  public UpdateAT: Timestamp

}
export default History
