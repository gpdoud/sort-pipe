# *sort* pipe for Angular

The pipe **sort** is an Angular pipe built to sort arrays of objects and replace the deprecated *orderBy* pipe that existed in previous versions of Angular.

## Format

```
sort {:key:{asc|desc}}}

[key] : default value is 'name'
asc | desc : sorts in ascending. default is 'asc'
```

Because this pipe is designed to sort arrays of objects, the key to sort is required. The default value for the key is the 'name'.

## Example

Assume you have a class for user defined like this:

```
//
// User class
//
export class User {
	id: number;
	name: string;
	age: number;

	constructor(id:number, name:string, age:number) {
		this.id = id;
		this.name = name;
		this.age = age;
	}
}
```

And an array of User instances that look like this the in the component.

```
  users: User[] = [
    { id:1, name:'Fred', age:65 },
    { id:2, name:'Sally', age:63 },
    { id:3, name:'James', age:23 },
    { id:4, name:'Adam', age:26 }
  ];
```

Since the default sort is by name and the User class has a name key, it would look like this:

```
<ul>
  <li *ngFor='let user of users | sort'>[{{user.id}}] {{user.name}}: {{user.age}}</li>
</ul>
//
// The output:
//
* [4] Adam: 26
* [1] Fred: 65
* [3] James: 23
* [2] Sally: 63
```

To sort the same array by age ...

```
<ul>
  <li *ngFor="'"let user of users | sort:'age'">[{{user.id}}] {{user.name}}: {{user.age}}</li>
</ul>
//
// The output:
//
* [3] James: 23
* [4] Adam: 26
* [2] Sally: 63
* [1] Fred: 65
```

Finally, if the sort by age should be in descending sequence ...

```
<ul>
  <li *ngFor='let user of users | sort:'age':'desc'">[{{user.id}}] {{user.name}}: {{user.age}}</li>
</ul>
//
// The output:
//
[1] Fred: 65
[2] Sally: 63
[4] Adam: 26
[3] James: 23
```

## In closing

If you use the pipe, I hope it makes your application a little better. Feel free to send me an email telling me how you're using it.

Greg