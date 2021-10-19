import { Migration } from '@mikro-orm/migrations';

export class Migration20211019105614 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "users" ("id" serial primary key, "user_name" varchar(255) not null, "email" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);');
  }

}
