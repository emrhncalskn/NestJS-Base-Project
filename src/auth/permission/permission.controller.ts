import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { PermissionService } from './permission.service';
import { PermissionDto } from '../dto/permission.dto';
import { RoleDto } from '../dto/role.dto';

@ApiBearerAuth()
@Controller('permission')
export class PermissionController {
    constructor(private readonly permissionService: PermissionService) { }

    @Get()
    async getPermissions(@Res() res) {
        try { return res.status(200).send(await this.permissionService.getPermissions()) }
        catch (error) { return res.status(400).send({ msg: error.message }) }
    }

    @Post('get/:id')
    async getPermissionById(@Res() res, @Param('id') id: number) {
        try { return res.status(200).send(await this.permissionService.getPermission(id)) }
        catch (error) { return res.status(400).send({ msg: error.message }) }
    }

    @Post('create/new')
    async create(@Body() data: PermissionDto, @Res() res) {
        try { return res.status(200).send(await this.permissionService.create(data)) }
        catch (error) { return res.status(400).send({ msg: error.message }) }
    }

    @Post('set/:id')
    async setPermission(@Param('id') id: number, @Body() data: PermissionDto, @Res() res) {
        try { return res.status(200).send(await this.permissionService.setPermission(id, data)) }
        catch (error) { return res.status(400).send({ msg: error.message }) }
    }

    @Post('delete/:id')
    async deletePermission(@Param('id') id: number, @Res() res) {
        try { return res.status(200).send(await this.permissionService.deletePermission(id)) }
        catch (error) { return res.status(400).send({ msg: error.message }) }
    }

    @Post('create/role')
    async createRole(@Body() data: RoleDto, @Res() res) {
        try { return res.status(200).send(await this.permissionService.createRole(data)) }
        catch (error) { return res.status(400).send({ msg: error.message }) }
    }

    @Get('roles')
    async getRoles(@Res() res) {
        try { return res.status(200).send(await this.permissionService.getRoles()) }
        catch (error) { return res.status(400).send({ msg: error.message }) }
    }

    @Get('role/get/:id')
    async getRoleById(@Param('id') id: number, @Res() res) {
        try { return res.status(200).send(await this.permissionService.getRole(id)) }
        catch (error) { return res.status(400).send({ msg: error.message }) }
    }

    @Post('role/set/:id')
    async setRole(@Param('id') id: number, @Body() data: RoleDto, @Res() res) {
        try { return res.status(200).send(await this.permissionService.setRole(id, data)) }
        catch (error) { return res.status(400).send({ msg: error.message }) }
    }

    @Post('role/del/:id')
    async deleteRole(@Param('id') id: number, @Res() res) {
        try { return res.status(200).send(await this.permissionService.deleteRole(id)) }
        catch (error) { return res.status(400).send({ msg: error.message }) }
    }

    @Get('apis')
    async getApis(@Res() res) {
        try { return res.status(200).send(await this.permissionService.getApis()) }
        catch (error) { return res.status(400).send({ msg: error.message }) }
    }

    @Get('api/:roleid')
    async getApisByRole(@Param('roleid') roleid: number, @Res() res) {
        try { return res.status(200).send(await this.permissionService.getApisByRole(roleid)) }
        catch (error) { return res.status(400).send({ msg: error.message }) }
    }

}