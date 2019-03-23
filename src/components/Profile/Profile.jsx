import React, { Component } from 'react';
import Bar from '../Header';

class Profile extends Component {
    render() {
        return (
            <div class="bg-food">
                <Bar />
                <div className="cont-form">
                    <div className="container">
                    <div className="row profile">
                        <div className="col-md-3">
                        <div className="profile-sidebar">
                            <div className="profile-userpic">
                            <img id="imgLeftProfileMemberAvatar" src="https://media.foody.vn/usr/g1460/14597818/avt/c200x200/foody-avatar-518-636883992157654773.jpg" className="img-responsive img-pf" alt />
                            </div>
                            <div className="profile-usertitle">
                            <div className="profile-usertitle-name">
                                Trang Huỳnh
                            </div>
                            </div>
                            <div className="profile-usermenu">
                            <ul className="nav">
                                <li className="active" id="proInfo">
                                <a href="/tai-khoan">
                                    <i className="fa fa-pencil-square-o " />
                                    Thông tin cơ bản
                                </a>
                                </li>
                                <li id="proChangePass">
                                <a href="/tai-khoan/doi-mat-khau">
                                    <i className="fa fa-user" />
                                    Đổi mật khẩu
                                </a>
                                </li>
                                <li id="proChangeAvatar">
                                <a href="/tai-khoan/doi-hinh-dai-dien">
                                    <i className="fa fa-photo" />
                                    Cập nhật hình đại diện
                                </a>
                                </li>
                                <li id="proManageAddress">
                                <a href="/tai-khoan/quan-ly-dia-chi">
                                    <i className="fa fa-cog" />
                                    Quản lý địa chỉ
                                </a>
                                </li>
                                <li>
                                <a href="/dang-xuat">
                                    <i className="fa fa-sign-out" />
                                    Đăng xuất
                                </a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-9">
                        <div className="profile-content">
                            <div className="row">
                            <div className="col-md-2" />
                            <div className="col-md-8">
                                <form id="signupform" action="/tai-khoan" className="form-horizontal" method="post" role="form">        <div className="form-group">
                                    <label className="control-label col-md-4" />
                                    <div className="col-md-8">
                                    <h3 style={{margin: 0}} className="pf">Profile</h3>
                                    </div>
                                </div>
                                <input name="__RequestVerificationToken" type="hidden" defaultValue="AlQNW7r_V2HGvZNGy8vmDfXl6pSlihbwNaAA5fj5ZhJK6g5ClbxiLAE9RnNghjdLEF6rzPbvaiwg_5ZDPcdgO3IAIn7ge6fBw_6H8Ds8NG8vqTXgeqYx9EFVdiizrDf60" />    
                                <div className="form-group form-group-pf">
                                    <label className="control-label col-md-4">FullName:</label>
                                    <div className="col-md-8">
                                    <input className="form-control form-control-pf" id="fullName" name="fullName" placeholder="FullName" type="text" />
                                    <span className="field-validation-valid" data-valmsg-for="fullName" data-valmsg-replace="true" />
                                    </div>
                                </div>
                                <div className="form-group form-group-pf">
                                    <label className="control-label col-md-4">Address:</label>
                                    <div className="col-md-8">
                                    <input className="form-control form-control-pf" id="Address" name="Address" placeholder="Address" type="text" />
                                    <span className="field-validation-valid" data-valmsg-for="Address" data-valmsg-replace="true" />
                                    </div>
                                </div>
                                <div className="form-group form-group-pf">
                                    <label className="control-label col-md-4">Phone:</label>
                                    <div className="col-md-8">
                                    <input className="form-control form-control-pf" id="Phone" name="Phone" placeholder="Phone" type="tel" />
                                    <span className="field-validation-valid" data-valmsg-for="Phone" data-valmsg-replace="true" />
                                    </div>
                                </div>
                                <div className="form-group form-group-pf">
                                    <label className="control-label col-md-4">Email:</label>
                                    <div className="col-md-8">
                                    <input className="form-control form-control-pf" id="Email" name="Email" placeholder="Email" type="text"/>
                                    <span className="field-validation-valid" data-valmsg-for="Email" data-valmsg-replace="true" />
                                    </div>
                                </div>
                                <div className="form-group form-group-pf">
                                    <label className="control-label col-md-4">Birthday:</label>
                                    <div className="col-md-8">
                                    <div className="row">
                                        <div className="col-md-4 col-sm-4 col-xs-4">
                                        <select className="form-control form-control-pf form-control-cbb form-control-cbb-gender" data-val="true" data-val-number="The field DateOfBirthDay must be a number." id="DateOfBirthDay" name="DateOfBirthDay"><option selected="selected" value={0}>Ngày</option>
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                            <option value={6}>6</option>
                                            <option value={7}>7</option>
                                            <option value={8}>8</option>
                                            <option value={9}>9</option>
                                            <option value={10}>10</option>
                                            <option value={11}>11</option>
                                            <option value={12}>12</option>
                                            <option value={13}>13</option>
                                            <option value={14}>14</option>
                                            <option value={15}>15</option>
                                            <option value={16}>16</option>
                                            <option value={17}>17</option>
                                            <option value={18}>18</option>
                                            <option value={19}>19</option>
                                            <option value={20}>20</option>
                                            <option value={21}>21</option>
                                            <option value={22}>22</option>
                                            <option value={23}>23</option>
                                            <option value={24}>24</option>
                                            <option value={25}>25</option>
                                            <option value={26}>26</option>
                                            <option value={27}>27</option>
                                            <option value={28}>28</option>
                                            <option value={29}>29</option>
                                            <option value={30}>30</option>
                                            <option value={31}>31</option>
                                        </select>
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-xs-4">
                                        <select className="form-control form-control-pf form-control-cbb form-control-cbb-gender" data-val="true" data-val-number="The field DateOfBirthMonth must be a number." id="DateOfBirthMonth" name="DateOfBirthMonth"><option selected="selected" value={0}>Tháng</option>
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                            <option value={6}>6</option>
                                            <option value={7}>7</option>
                                            <option value={8}>8</option>
                                            <option value={9}>9</option>
                                            <option value={10}>10</option>
                                            <option value={11}>11</option>
                                            <option value={12}>12</option>
                                        </select>
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-xs-4">
                                        <select className="form-control form-control-pf form-control-cbb form-control-cbb-gender" data-val="true" data-val-number="The field DateOfBirthYear must be a number." id="DateOfBirthYear" name="DateOfBirthYear"><option selected="selected" value={0}>Năm</option>
                                            <option value={1949}>1949</option>
                                            <option value={1950}>1950</option>
                                            <option value={1951}>1951</option>
                                            <option value={1952}>1952</option>
                                            <option value={1953}>1953</option>
                                            <option value={1954}>1954</option>
                                            <option value={1955}>1955</option>
                                            <option value={1956}>1956</option>
                                            <option value={1957}>1957</option>
                                            <option value={1958}>1958</option>
                                            <option value={1959}>1959</option>
                                            <option value={1960}>1960</option>
                                            <option value={1961}>1961</option>
                                            <option value={1962}>1962</option>
                                            <option value={1963}>1963</option>
                                            <option value={1964}>1964</option>
                                            <option value={1965}>1965</option>
                                            <option value={1966}>1966</option>
                                            <option value={1967}>1967</option>
                                            <option value={1968}>1968</option>
                                            <option value={1969}>1969</option>
                                            <option value={1970}>1970</option>
                                            <option value={1971}>1971</option>
                                            <option value={1972}>1972</option>
                                            <option value={1973}>1973</option>
                                            <option value={1974}>1974</option>
                                            <option value={1975}>1975</option>
                                            <option value={1976}>1976</option>
                                            <option value={1977}>1977</option>
                                            <option value={1978}>1978</option>
                                            <option value={1979}>1979</option>
                                            <option value={1980}>1980</option>
                                            <option value={1981}>1981</option>
                                            <option value={1982}>1982</option>
                                            <option value={1983}>1983</option>
                                            <option value={1984}>1984</option>
                                            <option value={1985}>1985</option>
                                            <option value={1986}>1986</option>
                                            <option value={1987}>1987</option>
                                            <option value={1988}>1988</option>
                                            <option value={1989}>1989</option>
                                            <option value={1990}>1990</option>
                                            <option value={1991}>1991</option>
                                            <option value={1992}>1992</option>
                                            <option value={1993}>1993</option>
                                            <option value={1994}>1994</option>
                                            <option value={1995}>1995</option>
                                            <option value={1996}>1996</option>
                                            <option value={1997}>1997</option>
                                            <option value={1998}>1998</option>
                                            <option value={1999}>1999</option>
                                            <option value={2000}>2000</option>
                                            <option value={2001}>2001</option>
                                            <option value={2002}>2002</option>
                                            <option value={2003}>2003</option>
                                            <option value={2004}>2004</option>
                                            <option value={2005}>2005</option>
                                            <option value={2006}>2006</option>
                                            <option value={2007}>2007</option>
                                            <option value={2008}>2008</option>
                                            <option value={2009}>2009</option>
                                            <option value={2010}>2010</option>
                                            <option value={2011}>2011</option>
                                            <option value={2012}>2012</option>
                                            <option value={2013}>2013</option>
                                            <option value={2014}>2014</option>
                                            <option value={2015}>2015</option>
                                            <option value={2016}>2016</option>
                                            <option value={2017}>2017</option>
                                            <option value={2018}>2018</option>
                                            <option value={2019}>2019</option>
                                        </select>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="form-group form-group-pf">
                                    <label className="control-label col-md-4" />
                                    <div className="col-md-8">
                                    <div className="submit-profile"><input type="submit" value="Change" id="bt_submit" className="btn btn-primary btn-pf" style={{width: '200px'}} /></div>
                                    </div>
                                </div>
                                </form>
                            </div>
                            <div className="col-md-2" />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Profile;