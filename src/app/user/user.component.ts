import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  users = [
    {
      id: 1,
      name: "Ductm",
      age: 20,
      phone: "000000000",
      avatar: "https://ap.poly.edu.vn/images/logo.png"
    },
    {
      id: 2,
      name: "Ductm1",
      age: 21,
      phone: "000000000",
      avatar: "https://ap.poly.edu.vn/images/logo.png"
    },
    {
      id: 3,
      name: "Ductm2",
      age: 22,
      phone: "000000000",
      avatar: "https://ap.poly.edu.vn/images/logo.png"
    }
  ];
  // định nghĩa 1 mảng trung gian lưu kết quả search đêr không bị ảnh hướng đến giá trị của mảng user gốc
  usersFilter = this.users;
  // định nghĩa hàm remove
  remove(userId: number) {
    // filter lọc có điều hiện
    // vì this.users.filter sinh ra mảng mới thỏa mãn điều kiện return
    // this.users thuộc tính users của component
    // có vẻ như k tương tác với db
    this.usersFilter = this.usersFilter.filter(user => {
      return user.id !== userId
    });
  }
  // định nghĩa hàm search sau khi nhập vào ô input
  onSearch(event: any) {
    // xử lí tìm kiếm chữ hoa chữ thường chuyển hết về chữ thường
    // 2.khoảng trắng value
    // sử dụng phương thức trim() để tìm khoảng ở trnawsg đầu và cuối
    const value = event.target.value;
    const lowerCaseinput = value.toLowerCase();
    const trimInput = lowerCaseinput.trim();
    // laasy value
    // console.log(value);

    // gán cho userfilter để users gốc k bị thay đổi khi filter phải đổi view theo usersFilter
    this.usersFilter = this.users.filter(user => {
      const lowerCaseUserName = user.name.toLowerCase();
      // chuyển về trả ra chữ thường
      // return user.name.indexOf(value) !== -1;
      return lowerCaseUserName.indexOf(trimInput) !== -1;

    })
  }
  // loại bỏ khaorng trắng và hoa thường

  // thêm mới user
  // tiến hành định nghĩa 1 object newuser trung gian nhận giá trị input đầu vào và sau khi submit sẽ gán về giá trị gốc
  newUser = {
    id: 0,
    name: '',
    age: 0,
    phone: '',
    avatar: '',
  };
  onChange(event: any, key: string) {
    // this.newUser.id = this.users.length + 1; để lại  khi submit gán
    
    this.newUser = {
      ...this.newUser,
      [key]: event.target.value
    };
    // ... là cú pháp spread operator
    // ...this.newUser = lấy tất cả  kiểu id: 1, name: 'gido' ...... có bảo nhiêu value thì tống hết vào 
    // [key]: event.target.value ghi đè lên 
    // new key = 'name'
  // console.log(this.newUser);
  
  }
  onSubmit(){
    // validate
    if (!this.onValidate(this.newUser)) {
      alert('zui lòn nhộp đồy đủ hông tin');
      return;
    }

    // kiểm tra xem có phải đang sửa không
    if (this.isEdit) {
      for (let index = 0; index < this.users.length; index++) {
          if (this.users[index].id === this.newUser.id){
            this.users[index] = this.newUser;
          }
        
      }
      this.isEdit = false;
    }else{
       // gắn thêm id bằng độ dài + 1

    this.newUser.id = this.users.length + 1;
    // push thêm phần tử mới vào mảng users
    this.users.push(this.newUser);
    }

   
    // gán lại giá trị cho newUser
    this.newUser = {
      id: 0,
      name: '',
      age: 0,
      phone: '',
      avatar: ''
    };
  }
  onValidate(object: any){
    // check rỗng
    // 
    if (!object.name || !object.age || object.age <= '0' || !object.phone) {
      return false;
    }
    return true;
  }
  // nhận data để sửa
  // mặc định sẽ không pahri đang sửa
  isEdit = false;
  onEdit(obj: any){
    this.newUser = obj;
    // chuyển trạng thái đang sửa thành true
    this.isEdit = true;
    // sau đó xử lý theo ô onsubmit nếu isedit true

  }
}
// định nghĩa ra users
