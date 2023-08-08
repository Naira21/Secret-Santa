import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.email = email;

    this.name = name;
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
  })
  name: string;

  @Column()
  email: string;
}
