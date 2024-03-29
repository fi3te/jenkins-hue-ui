/* eslint-disable */

export namespace DTO {

    export interface BridgeCreateDTO extends Serializable {
        ip?: string;
        userId?: number;
    }

    export interface BridgeDTO extends Serializable {
        hueUserName?: string;
        id?: number;
        ip?: string;
        state?: string;
        user?: BridgeDTO_UserDTO;
    }

    export interface BridgeDTO_UserDTO extends Serializable {
        email?: string;
        forename?: string;
        id?: number;
        roles?: any[];
        surname?: string;
    }

    export interface DashboardInformationDTO extends Serializable {
        availableLampCount?: number;
        bridgeCount?: number;
        jobCount?: number;
        lampCount?: number;
        teamJobCount?: number;
        teamLampCount?: number;
        teamLamps?: LampNameDTO[];
        teamUserCount?: number;
        userCount?: number;
    }

    export interface FoundBridgeDTO extends Serializable {
        id?: string;
        internalipaddress?: string;
        macaddress?: string;
        name?: string;
    }

    export interface GroupedScenarioConfigsLamp {
        buildingConfigs?: ScenarioConfigDTO[];
        failureConfigs?: ScenarioConfigDTO[];
        successConfigs?: ScenarioConfigDTO[];
        unstableConfigs?: ScenarioConfigDTO[];
    }

    export interface JenkinsBuildDTO extends Serializable {
        building?: boolean;
        number?: number;
        result?: string;
        timestamp?: Date;
    }

    export interface JenkinsDTO extends Serializable {
        jobs?: JenkinsJobDTO[];
    }

    export interface JenkinsFolderOrJobDTO extends Serializable {
        builds?: JenkinsBuildDTO[];
        jobs?: JenkinsFolderOrJobDTO[];
        name?: string;
    }

    export interface JenkinsFolderStructureDTO extends Serializable {
        jobs?: JenkinsFolderStructureDTO[];
        name?: string;
    }

    export interface JenkinsJobDTO extends Serializable {
        builds?: JenkinsBuildDTO[];
        name?: string;
    }

    export interface JenkinsJobNamesDTO extends Serializable {
        jobs?: JenkinsJobNamesDTO_JobDTO[];
    }

    export interface JenkinsJobNamesDTO_JobDTO extends Serializable {
        name?: string;
    }

    export interface JobDTO extends Serializable {
        id?: number;
        name?: string;
    }

    export interface LampCreateDTO extends Serializable {
        hueUniqueId?: string;
        name?: string;
        teamId?: number;
    }

    export interface LampDTO extends LampWithHueUniqueId, Serializable {
        id?: number;
        jobs?: JobDTO[];
        lastShownScenario?: any;
        name?: string;
        scenarioConfigs?: ScenarioConfigDTO[];
        team?: LampDTO_TeamDTO;
        workingEnd?: Date;
        workingStart?: Date;
    }

    export interface LampDTO_TeamDTO extends Serializable {
        id?: number;
        name?: string;
        scenarioPriority?: any[];
    }

    export interface LampGroupedScenariosDTO extends Serializable, LampWithHueUniqueId, GroupedScenarioConfigsLamp {
        id?: number;
        jobs?: JobDTO[];
        lastShownScenario?: any;
        name?: string;
        team?: LampGroupedScenariosDTO_TeamDTO;
        workingEnd?: Date;
        workingStart?: Date;
    }

    export interface LampGroupedScenariosDTO_TeamDTO extends Serializable {
        id?: number;
        name?: string;
        scenarioPriority?: any[];
    }

    export interface LampHueDTO extends Serializable {
        lampOn?: boolean;
        manufacturerName?: string;
        name?: string;
        type?: string;
        uniqueId?: string;
    }

    export interface LampNameDTO extends LampWithHueUniqueId, Serializable {
        id?: number;
        name?: string;
    }

    export interface LampRenameDTO extends Serializable {
        id?: number;
        name?: string;
    }

    export interface LampTestDTO extends Serializable {
        lamps?: LampNameDTO[];
        scenarioConfig?: ScenarioConfigDTO;
    }

    export interface LampTurnOffDTO extends Serializable {
        lamps?: LampNameDTO[];
    }

    export interface LampUpdateDTO extends Serializable, GroupedScenarioConfigsLamp {
        id?: number;
        jobs?: JobDTO[];
        workingEnd?: Date;
        workingStart?: Date;
    }

    export interface LampUpdateLastShownScenarioDTO extends Serializable {
        id?: number;
        lastShownScenario?: any;
    }

    export interface LampWithHueUniqueId {
        hueUniqueId?: string;
    }

    export interface LightDTO extends Serializable {
        uniqueid?: string;
    }

    export interface Principal {
        name?: string;
    }

    export interface PrincipalDTO extends Serializable {
        principal?: Principal;
        teamId?: number;
        userId?: number;
    }

    export interface ScenarioConfigDTO extends Serializable {
        brightness?: number;
        brightnessChangeEnabled?: boolean;
        colorChangeEnabled?: boolean;
        colorHex?: string;
        id?: number;
        lampOn?: boolean;
        onetimePulsationColorChangeEnabled?: boolean;
        onetimePulsationColorHex?: string;
        onetimePulsationEnabled?: boolean;
        scenario?: any;
    }

    export interface Serializable {
    }

    export interface TeamCreateDTO extends Serializable {
        name?: string;
    }

    export interface TeamLampsDTO extends Serializable {
        id?: number;
        lamps?: TeamLampsDTO_LampDTO[];
        name?: string;
        scenarioPriority?: any[];
    }

    export interface TeamLampsDTO_LampDTO extends Serializable, GroupedScenarioConfigsLamp {
        hueUniqueId?: string;
        id?: number;
        jobs?: JobDTO[];
        lastShownScenario?: any;
        name?: string;
        workingEnd?: Date;
        workingStart?: Date;
    }

    export interface TeamRenameDTO extends Serializable {
        id?: number;
        name?: string;
    }

    export interface TeamUpdateDTO extends Serializable {
        id?: number;
        scenarioPriority?: any[];
    }

    export interface TeamUsersDTO extends Serializable {
        id?: number;
        name?: string;
        scenarioPriority?: any[];
        users?: TeamUsersDTO_UserDTO[];
    }

    export interface TeamUsersDTO_UserDTO extends Serializable {
        email?: string;
        forename?: string;
        id?: number;
        login?: string;
        roles?: any[];
        surname?: string;
    }

    export interface UserCreateDTO extends Serializable {
        login?: string;
        teamId?: number;
    }

    export interface UserDTO extends Serializable {
        bridges?: UserDTO_BridgeDTO[];
        email?: string;
        forename?: string;
        id?: number;
        login?: string;
        roles?: any[];
        surname?: string;
        team?: UserDTO_TeamDTO;
    }

    export interface UserDTO_BridgeDTO extends Serializable {
        hueUserName?: string;
        id?: number;
        ip?: string;
    }

    export interface UserDTO_TeamDTO extends Serializable {
        id?: number;
        name?: string;
    }

    export interface UserUpdateDTO extends Serializable {
        id?: number;
        roles?: any[];
    }

}
