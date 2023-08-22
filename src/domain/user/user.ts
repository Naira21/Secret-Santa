import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number | null;

  @Column({
    length: 50,
    type: 'varchar',
  })
  name: string;

  @Column({
    length: 50,
    type: 'varchar',
  })
  email: string;

  constructor(id: number | null, name: string, email: string) {
    this.id = id;
    this.email = email;
    this.name = name;
  }

  public getId(): number | null {
    return this.id;
  }

  public setId(id: number) {
    this.id = id;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }

  public getEmail(): string {
    return this.email;
  }

  public setEmail(email: string) {
    this.email = email;
  }
}
