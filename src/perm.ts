enum Permission {
    Read = "read",
    Write = "write",
    Execute = "execute",
}

const Perm = {
    network:{
        connect: {
            http: "http",
            tcp: "tcp",
            udp: "udp",
        },
        listen: {
            http: "http",
            tcp: "tcp",
            udp: "udp",
        },
    }
} as const;

interface permissionsjson {
    [name: string]: string[];
}

export class PermissionManager {
    private permissions: Set<string> = new Set();
    private appid: string|undefined;
    constructor(appid?: string) {
        this.appid = appid;
    }
    add(permission: Permission) {
        this.permissions.add(permission);
    }

    has(permission: Permission) {
        return this.permissions.has(permission);
    }

    save() {
        Deno.readTextFile("permissions.json").then((data) => {
            const permissions:permissionsjson = JSON.parse(data);
            permissions[this.appid!] = Array.from(this.permissions);
            Deno.writeTextFile("permissions.json", JSON.stringify(permissions));
        })
    }

    load() {
        Deno.readTextFile("permissions.json").then((data) => {
            const permissions:permissionsjson = JSON.parse(data);
            this.permissions = new Set(permissions[this.appid!]);
        })
    }
}