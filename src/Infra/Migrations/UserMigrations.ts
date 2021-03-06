import { Collection, ObjectId } from 'mongodb'

import { User } from '@/Domain/Entity'

export default class UserMigrations {
  constructor (private collection: Collection) {}

  async set () {
    const users = await this.collection.find().toArray()
    if (!users.length) await this.collection.insertOne(this.supervisor)
  }

  private get supervisor () {
    const user = new User()
    user.name = 'Administrador'
    user.cpf = '420.258.328-00'
    user.email = 'jcruzaraujoneto@outlook.com'
    user.password = '$2a$10$H6FakaI7g3fiy/AjFrsR7eOO9oPUyMHKaNmp7hoRgpRyydGMENoiW' // 12345678
    user.phone = '(66) 98156-3280'
    user.avatar = 'https://avatars2.githubusercontent.com/u/40739602'
    user.idProfile = new ObjectId('5e5be02f1a43784474b14230')
    user.status = true
    user.hashPassword = null
    user.confirmed = true
    user.hashConfirmed = null

    return user
  }
}
