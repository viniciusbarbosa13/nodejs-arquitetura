import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

import {
  CertificatePaginateParams,
  CreateCertificateDto,
  UpdateCertificateDto,
} from '../../../src/domain/certificate/dto/certificate.dto';
import { CertificateService } from '../../../src/services/certificate/certificate.service';

@ApiTags('Certificates')
@Controller('certificate')
export class CertificateController {
  constructor(private readonly certificateService: CertificateService) {}

  @Get()
  @ApiOperation({ summary: 'Get All Certificates' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 400, description: 'Not Found' })
  @ApiResponse({ status: 500, description: 'Internal Server error' })
  @ApiQuery({ name: 'page' })
  @ApiQuery({ name: 'partnerId' })
  @ApiQuery({ name: 'userId' })
  getAll(@Query() query: CertificatePaginateParams) {
    return this.certificateService.getAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get Certificate by id' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 400, description: 'Not Found' })
  @ApiResponse({ status: 500, description: 'Internal Server error' })
  getById(@Param('id') id: string) {
    return this.certificateService.getById(id);
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create Certificate' })
  @ApiResponse({ status: 201, description: 'Created' })
  @ApiResponse({ status: 500, description: 'Internal Server error' })
  @ApiBody({ type: CreateCertificateDto })
  crete(@Body() createCertificateDto: CreateCertificateDto) {
    return this.certificateService.create(createCertificateDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update Certificate' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 400, description: 'Not Found' })
  @ApiResponse({ status: 500, description: 'Internal Server error' })
  @ApiBody({ type: UpdateCertificateDto })
  update(@Param('id') id, @Body() updateCertificateDto: UpdateCertificateDto) {
    return this.certificateService.update(updateCertificateDto, id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete Certificate' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 400, description: 'Not Found' })
  @ApiResponse({ status: 500, description: 'Internal Server error' })
  delete(@Param('id') id: string) {
    return this.certificateService.delete(id);
  }
}
