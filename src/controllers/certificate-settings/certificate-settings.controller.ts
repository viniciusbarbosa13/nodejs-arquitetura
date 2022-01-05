import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

import {
  CertificateSettingsPaginateParams,
  CreateCertificateSettingsDto,
  UpdateCertificateSettingsDto,
} from '../../../src/domain/certificate-settings/dto/CertificateSettings.dto';
import { CertificateSettingsService } from '../../../src/services/certificate-settings/certificate-settings.service';

@ApiTags('Certificates Settings')
@Controller('certificate-settings')
export class CertificateSettingsController {
  constructor(private readonly service: CertificateSettingsService) {}
  @Get()
  @ApiOperation({ summary: 'Get All Certificates' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 400, description: 'Not Found' })
  @ApiResponse({ status: 500, description: 'Internal Server error' })
  @ApiQuery({ name: 'page' })
  @ApiQuery({ name: 'partnerId' })
  @ApiQuery({ name: 'userId' })
  getAll(@Query() query: CertificateSettingsPaginateParams) {
    return this.service.getAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get Certificate by id' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 400, description: 'Not Found' })
  @ApiResponse({ status: 500, description: 'Internal Server error' })
  getById(@Param('id') id: string) {
    return this.service.getById(id);
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create Certificate' })
  @ApiResponse({ status: 201, description: 'Created' })
  @ApiResponse({ status: 500, description: 'Internal Server error' })
  @ApiBody({ type: CreateCertificateSettingsDto })
  crete(@Body() create: CreateCertificateSettingsDto) {
    return this.service.create(create);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update Certificate' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 400, description: 'Not Found' })
  @ApiResponse({ status: 500, description: 'Internal Server error' })
  @ApiBody({ type: UpdateCertificateSettingsDto })
  update(@Param('id') id, @Body() updateDto: UpdateCertificateSettingsDto) {
    return this.service.update(updateDto, id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete Certificate' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 400, description: 'Not Found' })
  @ApiResponse({ status: 500, description: 'Internal Server error' })
  delete(@Param('id') id: string) {
    return this.service.delete(id);
  }
}
