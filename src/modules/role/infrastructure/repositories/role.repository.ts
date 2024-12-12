import {BaseRepository} from "../../../../shared/infrastructure/repositories/base.repository";
import {RoleEntity, RoleEntityToPersist} from "../../domain/entities/role.entity";
import {IRoleRepository} from "../../domain/interfaces/repositories/role.repository.interface";
import {getRoleModel} from "../model/role.model";

export class RoleRepository extends BaseRepository<RoleEntity, RoleEntityToPersist> implements IRoleRepository{

    constructor() {
        super(getRoleModel(), RoleEntity.fromDatabase);
    }
}