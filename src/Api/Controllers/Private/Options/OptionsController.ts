import { Controller, Get } from '@nestjs/common'
import { ProfileViewModel } from '@/Api/ViewModel'

@Controller('options')
export default class OptionsController {
  @Get()
  async get () {
    return {
      optionsProfileLevelUser: new ProfileViewModel().getLevel()
    }
  }
}
