import React from 'react';
import { Formik as FormikWrapper, Field, Form } from 'formik';
const initialValues = {
	noMask: false,
	notSafe: false,
	oldCar: false,
	rudeDriver: false
};
function Yes(props) {
	const onSubmit = (value) => {
		console.log(value);
		props.history.replace('/final');
	};

	return (
		<div className="route">
			<p className="p-0 m-0 route__text">
				<b>با چه مشکلی حین سفر مواجه شدید ؟</b>
			</p>
			<FormikWrapper initialValues={initialValues} onSubmit={onSubmit}>
				<Form>
					<div className="d-flex justify-content-center flex-column align-items-end route--text-no pb-2">
						<div dir="rtl" className="form-check mt-4 text-right ">
							<Field type="checkbox" name="noMask" id="noMask" className="form-check-input" />
							<label
								className="form-check-label mr-4 checkbox-text"
								htmlFor="noMask"
								name="noMask"
								for="noMask"
							>
								عدم استفاده راننده از ماسک
							</label>
						</div>
						<div dir="rtl" className="form-check text-right mt-2">
							<Field type="checkbox" name="notSafe" id="notSafe" className="form-check-input ml-5" />
							<label
								className="form-check-label mr-4 checkbox-text"
								htmlFor="notSafe"
								name="notSafe"
								for="notSafe"
							>
								عدم رعایت نکات ایمنی
							</label>
						</div>
						<div dir="rtl" className="form-check text-right mt-2">
							<Field type="checkbox" name="oldCar" id="oldCar" className="form-check-input ml-5" />
							<label
								className="form-check-label mr-4 checkbox-text"
								htmlFor="oldCar"
								name="oldCar"
								for="oldCar"
							>
								کیفیت پایین ماشین
							</label>
						</div>
						<div dir="rtl" className="form-check text-right mt-2">
							<Field
								type="checkbox"
								name="rudeDriver"
								id="rudeDriver"
								className="form-check-input ml-5"
							/>
							<label
								className="form-check-label mr-4 checkbox-text"
								htmlFor="rudeDriver"
								name="rudeDriver"
								for="rudeDriver"
							>
								پرحرفی یا بی احترامی راننده
							</label>
						</div>
					</div>

					<button type="submit" className="btn button btn-success mr-2 mt-3">
						ثبت بازخورد
					</button>

					<button type="reset" className="btn button btn-secondary mt-3">
						پاک کردن همه
					</button>
				</Form>
			</FormikWrapper>
		</div>
	);
}

export default Yes;
